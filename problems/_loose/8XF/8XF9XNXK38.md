---
tag: 8XF9XNXK38
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=203952
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given positive odd integers $m$ and $n$ where the set of all prime factors of $m$ is the same as the set of all prime factors $n$, and $n \vert m$. Let $a$ be an arbitrary integer which is relatively prime to $m$ and $n$. Prove that:
$$ o_m(a) = o_n(a) \times \frac{m}{\gcd(m, a^{o_n(a)}-1)} $$ where $o_k(a)$ denotes the smallest positive integer such that $a^{o_k(a)} \equiv 1$ (mod $k$) holds for some natural number $k > 1$.
