interface Props {
  name: string;
  setName: (name: string) => void;
  onNext: () => void;
}

export const NameSection = ({ name, setName, onNext }: Props) => {
  return (
    <form
      className="flex gap-4 w-lg mx-auto"
      onSubmit={(e) => {
        e.preventDefault();
        onNext();
      }}
    >
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Challenge Name"
        className="input input-bordered w-full"
        autoFocus
      />
      <button className="btn btn-primary" type="submit">
        Next
      </button>
    </form>
  );
};
