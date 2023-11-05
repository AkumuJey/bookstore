//encrpt password
export const encryptPassword = async (password: string) => {
    const {genSaltSync, hashSync} = await import("bcrypt-ts")
    let salt = genSaltSync(10);
    return hashSync(password, salt);
}