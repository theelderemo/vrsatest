import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { supabase } from './UserProvider';
import { useUser } from './UserProvider';

export default function AuthComponent() {
  const { user } = useUser();

  if (user) {
    return (
      <div className="p-4 text-center">
        <p>Welcome, {user.email}!</p>
        <button
          className="mt-2 px-4 py-2 bg-red-600 text-white rounded"
          onClick={async () => {
            await supabase.auth.signOut();
          }}
        >
          Sign Out
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto p-4">
      <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
        providers={[]}
        theme="dark"
      />
    </div>
  );
}
