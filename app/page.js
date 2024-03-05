'use client'

import { GetAllUsers } from '@/app/api/requests'

export default function Home() {

  return (
    <div>
      <div className="ml-4 mt-4">
        <button className="bg-gray-300 p-2 rounded-md" onClick={()=> GetAllUsers()}>
          Listar Herois
        </button>
      </div>
    </div>
  );
}
