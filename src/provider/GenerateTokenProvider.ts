import { sign } from "jsonwebtoken"

class GenerateTokenProvider {
    async execute(userId: string) {
        //  Gerar token do usuário
        const token = sign({}, "ee3d22fa-8fbc-4a74-b45a-b243e68b3f04", {
            subject: userId,
            expiresIn: "20s"
        })
        return token
    }
}

export { GenerateTokenProvider }