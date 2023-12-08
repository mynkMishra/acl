- Roles relation has id, label, permissions column
- permissions column holds integer which when converted to binary, shows CRUD operations enable to dsibale to corres. roles
- For Example, Admin has `perimission` as 15. its binary representation is `1111`. 4 bits required to show CRUD (4 actions). It is configurable for further actions in future.

---

## Role

The relation `Role` holds these roles with `permissions` as below.

- Admin - 15 - `1111`
- Seller - 14 - `1110`
- Supporter - 5 - `0101`
- Customer - 4 - `0100`

## User

The relation `User` has column `id`, `username`, `password`, `role_id`

### TODO

Check for role and permissoin using accessToken for each request.
