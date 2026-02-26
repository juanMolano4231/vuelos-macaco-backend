Aplicación de venta de tiquetes de avión.

Entidades:
	Usuario
		Id
		Nombre
		Contraseña
		Correo
		Edad
	Tiquete
		Id
		IdVuelo
		IdUsuario
		Valor
	Vuelo
		Id
		Fecha y hora inicio
		Fecha y hora final
		Origen
		Destino


Para correrlo:
	docker compose down
	docker compose up -d --build

Para ver si hubo errores:
	docker compose logs api