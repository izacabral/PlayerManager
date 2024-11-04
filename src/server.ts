import Fastify from 'fastify'

const server = Fastify()

server.get("/", async (req, res) => {
	res.type("application/json").code(200)
	return {hello: "world"}
})

const start = async () => {
	try {
		await server.listen({ port: 3030 })
		console.log ("Server running on https://localhost:3030")
	} catch (error) {
		server.log.error(error),
		process.exit(1)
	}
}
start()
