# poc-submodule-main

This repository is a container project that references the three NestJS services as Git submodules and exposes them through a single reverse-proxy port.

## Structure

- `services/project1` -> `https://github.com/sachinrevin/poc-submodule-1.git`
- `services/project2` -> `https://github.com/sachinrevin/poc-submodule-2.git`
- `services/project3` -> `https://github.com/sachinrevin/poc-submodule-3.git`

## Clone With Submodules

```bash
git clone --recurse-submodules https://github.com/sachinrevin/poc-submodule-main.git
```

## Initialize Existing Clone

```bash
git submodule update --init --recursive
```

## Run All Services With Docker Compose

From the root of `poc-submodule-main`:

```bash
docker compose up
```

This starts all three NestJS services simultaneously from their submodule directories and serves them through a single gateway port.

Single public port:

- gateway runs on `4545`

Endpoints:

- `project1` -> `http://localhost:4545/project1/api/v1/health`
- `project2` -> `http://localhost:4545/project2/api/v1/health`
- `project3` -> `http://localhost:4545/project3/api/v1/health`

The three application containers still listen internally on `3001`, `3002`, and `3003`, but those ports are not exposed on the host.

Environment files are managed centrally in the main repository:

- `env/project1.env`
- `env/project2.env`
- `env/project3.env`

## Branch Strategy

The main repository tracks the `unifying` branch for each submodule in `.gitmodules`.

To refresh submodules from that branch later:

```bash
git submodule update --remote --merge
```

Stop everything with:

```bash
docker compose down
```

## Run Services Independently

Each service is isolated and should be started from its own submodule directory.

### project1

```bash
cd services/project1
npm install
npm run start
```

### project2

```bash
cd services/project2
npm install
npm run start
```

### project3

```bash
cd services/project3
npm install
npm run start
```
