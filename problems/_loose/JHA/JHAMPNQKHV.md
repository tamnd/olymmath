---
tag: JHAMPNQKHV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Ireland/train/0000.parquet#row=74
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ie-irmo
    source: hf-mathnet
    label: Ireland Irish Mathematical Olympiad
---
Let $n$ and $k$ be positive integers and suppose that $k$ is odd. Let $r$ be the greatest integer for which $2^r$ divides $n$. Let $h$ be the greatest integer for which $2^h$ divides $1 + k + k^2 + \dots + k^{n-1}$. Prove
(i) if $k \equiv 1 \pmod 4$, then $h = r$;
(ii) if $k \equiv 3 \pmod 4$ and $n$ is odd, then $h = 0$;
(iii) if $k \equiv 3 \pmod 4$ and $n$ is even, then $h = s + r - 1$, where $s$ is the greatest integer for which $2^s$ divides $k+1$.
