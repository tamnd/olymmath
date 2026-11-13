---
tag: VENY06ERR7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=251049
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0000.parquet#row=393
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: sa-samc
    source: hf-mathnet
    label: Saudi Arabia SAUDI ARABIAN MATHEMATICAL COMPETITIONS
---
Let $p$ be a given prime. For each prime $r$, we defind the function as following $F(r) =\frac{(p^{rp} - 1) (p - 1)}{(p^r - 1) (p^p - 1)}$.
1. Show that $F(r)$ is a positive integer for any prime $r \ne p$.
2. Show that $F(r)$ and $F(s)$ are coprime for any primes $r$ and $s$ such that $r \ne p, s \ne p$ and $r \ne s$.
3. Fix a prime $r \ne p$. Show that there is a prime divisor $q$ of $F(r)$ such that $p| q - 1$ but $p^2 \nmid q - 1$.
