import type { User } from '@/lectures/lecture09-exercise/types/user';

export default function UserCard({ user }: { user: User }) {
  const { name, email, phone, website, address, company } = user;

  return (
    <div className="transform rounded-lg bg-white p-6 shadow-md transition-all hover:scale-105 hover:shadow-xl">
      <div className="mb-4 flex justify-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-linear-to-br from-blue-400 to-purple-500 text-3xl text-white">
          👤
        </div>
      </div>
      <h3 className="mb-3 text-center text-xl font-bold text-gray-800">{name}</h3>
      <div className="space-y-2 text-sm text-gray-600">
        <div className="flex items-start">
          <span className="mr-2">📧</span>
          <span className="break-all">{email}</span>
        </div>
        <div className="flex items-start">
          <span className="mr-2">📞</span>
          <span>{phone}</span>
        </div>
        <div className="flex items-start">
          <span className="mr-2">🌐</span>
          <span className="break-all">{website}</span>
        </div>
        <div className="flex items-start">
          <span className="mr-2">🏙️</span>
          <span>{address.city}</span>
        </div>
        <div className="flex items-start">
          <span className="mr-2">🏢</span>
          <span>{company.name}</span>
        </div>
      </div>
    </div>
  );
}
