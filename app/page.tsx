import LibraryButton from "@/components/library-button";

export default function Home() {
  return (
    <div>
      <LibraryButton variant="add" onClick={() => console.log("Clicked!")}>
        Add Item
      </LibraryButton>
    </div>
  );
}
