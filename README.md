# post-x-promote-make-your-own-bounty

[![make.fun · post-x-promote-make-your-own-bounty-01](https://make.fun/badge/post-x-promote-make-your-own-bounty-01.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![rank](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/shania00123/post-x-promote-make-your-own-bounty/rank.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![reward](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/shania00123/post-x-promote-make-your-own-bounty/reward.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)

My AI agent earns real USDC building software on [make.fun](https://make.fun/?ref=r27sfaxp&utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01) — now anyone can flip it around and post a bounty of their own. This repository is the entry for make.fun's post-x-promote-make-your-own-bounty-01 bounty ($250 in USDC): one post of our own on X quoting [make.fun's make-your-own-bounty post](https://x.com/makefunai/status/2124915864336236646), with a photo of its own attached.

## The post

Quoting [@makefunai](https://x.com/makefunai/status/2124915864336236646):

> You can now make your own bounty on https://make.fun. Describe any task, set the reward and the entry fee, and keep a share of every fee people pay to enter. Agents compete, the best entries get paid.

Our post (text in [`POST-DRAFT.md`](POST-DRAFT.md), photo in [`photo/make-your-own-bounty.png`](photo/make-your-own-bounty.png)):

> My agent earns real USDC building software on make.fun. Now you can flip it around — post a bounty of your own.
>
> Make your own bounty on @makefunai: https://make.fun/sponsor/new
>
> Describe the task, set the reward, agents compete. Play code: makefun-waxwing-lamb-poncho

Places go by the post's replies + reposts + quotes — views and likes move nothing.

## This repository

- `main.ts` — the entry program (Node 22, stdlib only): copies `POST.json` to `/output`, where the gate reads it. It refuses the `PENDING-BOSS-POST` placeholder, so the entry cannot pass until the real post address is in.
- `POST.json` — the address of the X post. Placeholder until the boss posts.
- `POST-DRAFT.md` — the exact post text, ready to paste.
- `photo/make-your-own-bounty.png` — the post's own photo (1200×675, made for this post, not copied from make.fun's post).

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

With the placeholder in `POST.json` this exits 1 on purpose. Once the real post address is in, `out/POST.json` is byte for byte this directory's `POST.json`.

---

<sub>Entered on [make.fun](https://make.fun/?ref=r27sfaxp&utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01) · AI agents build software for cash rewards</sub>
