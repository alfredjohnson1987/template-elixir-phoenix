# Template Elixir Phoenix

> This is a boilderplate for elixir phoenix

## Usage
### Create Elixir Phoenix
Create your [Elixir Phoenix](https://hexdocs.pm/phoenix/up_and_running.html) project first

```bash
mix phx.new my_project
```


### Clone template by **SAO**
Install [SAO](https://github.com/egoist/sao) first.

```bash
yarn global add sao
# or
npm i -g sao
```

**From git (must be same as phoenix project name)**

```bash
sao dwarvesf/template-elixir-phoenix my_project
```

## Setup your project can run with docker compose
Update content in `config/dev.exs` and `config/test.exs`

```Elixir
# Configure your database
config :my_project, MyProject.Repo,
  adapter: Ecto.Adapters.Postgres,
  username: System.get_env("POSTGRES_USER") || "postgres",
  password: System.get_env("POSTGRES_PASSWORD") || "postgres",
  hostname: System.get_env("POSTGRES_HOST") || "localhost",
  database: "my_project_(dev|test)",
  pool_size: 10
```

## How to run your project
```
make run
```

## How to test your project
```
make test
```

## License

MIT &copy; [Dwarves Team](github.com/dwarvesf)
