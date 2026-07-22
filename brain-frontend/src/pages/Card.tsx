type CardProps = {
  title: string;
  type: string;
  link: string;
};

export default function Card({ title, type, link }: CardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-5 border border-gray-200 hover:shadow-lg transition">
      <h2 className="text-xl font-bold mb-3">{title}</h2>

      <p className="text-sm text-gray-500 mb-2">
        Type: <span className="font-medium">{type}</span>
      </p>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-purple-600 hover:underline break-all"
      >
        {link}
      </a>
    </div>
  );
}