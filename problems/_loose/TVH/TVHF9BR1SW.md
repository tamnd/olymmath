---
tag: TVHF9BR1SW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Ireland/train/0000.parquet#row=62
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
Suppose $p$ is the polynomial
$$
p(z) = az^4 + bz^3 + cz^2 + dz + e,
$$
where $a$, $b$, $c$, $d$, $e$ are complex numbers with $a \neq 0$. Prove that there is a complex number $h$ such that $p(h+z) = p(h-z)$ for all complex numbers $z$, if and only if
$$
b^3 - 4abc + 8a^2d = 0.
$$
