---
tag: W9Y0C1AYDW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=84382
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Show that, at the beginning of the $k^{\text{th}}$ pass through the main loop, the variables $u$ and $v$ are respectively equal to $u_{k}$ and $u_{2 k}$. Deduce that if $p$ is a prime factor of $n$, the main loop will be entered at most $2 p$ times, and that the Pollard algorithm has a time complexity of $\mathcal{O}\left(p \log (n)^{2}\right)$.

The heuristic on which Pollard's algorithm is based is as follows: the integers $u_{1}, u_{2}, \ldots$ are supposed to be distributed "randomly" in $\mathbb{Z} / n \mathbb{Z}$. Consequently, after $2 p$ passes through the main loop, there would be a probability of at most $2 p / n \leqslant 2 / \sqrt{n}$ of declaring that $n$ is probably prime.

Furthermore, if we assume our hypothesis of random distribution, the birthday paradox indicates that there is an overwhelming probability (i.e., which tends to 1 as $p$ becomes arbitrarily large) that, among the integers $u_{1}, u_{2}, \ldots, u_{\left\lfloor\sqrt{p} \log _{2}(p)\right\rfloor}$, there are some that are equal modulo $p$.
