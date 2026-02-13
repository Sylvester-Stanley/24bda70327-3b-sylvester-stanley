"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import LibraryButton from "@/components/library-button";

type Book = {
  id: number;
  title: string;
  author: string;
};

export default function Page() {
  const [query, setQuery] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [books, setBooks] = useState<Book[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editTitle, setEditTitle] = useState("");
  const [editAuthor, setEditAuthor] = useState("");

  const filteredBooks = books.filter(
    (b) =>
      b.title.toLowerCase().includes(query.toLowerCase()) ||
      b.author.toLowerCase().includes(query.toLowerCase())
  );

  function handleAdd() {
    if (!title.trim() || !author.trim()) return;

    const newBook: Book = {
      id: Date.now(),
      title,
      author,
    };

    setBooks([newBook, ...books]);
    setTitle("");
    setAuthor("");
  }

  function handleRemove(id: number) {
    setBooks(books.filter((b) => b.id !== id));
  }

  function handleEdit(book: Book) {
    setEditingId(book.id);
    setEditTitle(book.title);
    setEditAuthor(book.author);
  }

  function handleSaveEdit(id: number) {
    if (!editTitle.trim() || !editAuthor.trim()) return;

    setBooks(
      books.map((b) =>
        b.id === id ? { ...b, title: editTitle, author: editAuthor } : b
      )
    );

    setEditingId(null);
  }

  function handleCancelEdit() {
    setEditingId(null);
  }

  return (
    <div className="max-w-2xl mx-auto py-10 space-y-6">
      <h1 className="text-3xl font-bold text-center">
        Library Management System
      </h1>

      <Input
        placeholder="Search by title or author"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <div className="flex gap-2">
        <Input
          placeholder="Book title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Input
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <LibraryButton variant="add" onClick={handleAdd}>
          Add
        </LibraryButton>
      </div>

      <div className="space-y-4">
        {filteredBooks.length === 0 && (
          <p className="text-center text-muted-foreground">
            No books found
          </p>
        )}

        {filteredBooks.map((book) => (
          <Card key={book.id}>
            <CardContent className="p-4 space-y-3">
              {editingId === book.id ? (
                <>
                  <Input
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                  />
                  <Input
                    value={editAuthor}
                    onChange={(e) => setEditAuthor(e.target.value)}
                  />

                  <div className="flex gap-2">
                    <LibraryButton
                      variant="add"
                      onClick={() => handleSaveEdit(book.id)}
                    >
                      Save
                    </LibraryButton>
                    <LibraryButton
                      variant="remove"
                      onClick={handleCancelEdit}
                    >
                      Cancel
                    </LibraryButton>
                  </div>
                </>
              ) : (
                <>
                  <h2 className="font-semibold">{book.title}</h2>
                  <p className="text-muted-foreground">{book.author}</p>

                  <div className="flex gap-2">
                    <LibraryButton
                      variant="edit"
                      onClick={() => handleEdit(book)}
                    >
                      Edit
                    </LibraryButton>

                    <LibraryButton
                      variant="remove"
                      onClick={() => handleRemove(book.id)}
                    >
                      Remove
                    </LibraryButton>
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

