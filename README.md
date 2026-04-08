# poc-submodule-main

This repository is a container project that references the three NestJS services as Git submodules.

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
