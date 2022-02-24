interface User {
  uuid: string,
  first_name: string,
  last_name: string,
  email: string,
  email_verified_at: string | null,
  avatar: string | null,
  address: string,
  phone_number: string,
  is_marketing: number,
  last_login_at: string,
  created_at: string,
  updated_at: string
}

export default User;
