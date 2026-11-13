---
tag: CJA5AYDB4Y
kind: problem
type: answer
answer: x = m/2023 for m = 0, 1, ..., 2022
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Ireland/train/0000.parquet#row=361
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ie-irmo
    source: hf-mathnet
    label: Ireland IRL_ABooklet
---
Let $f : \mathbb{R} \to \mathbb{R}$ be the fractional part function, defined by $f(x) = x - \lfloor x \rfloor$, where $\lfloor x \rfloor$ is the greatest integer less than or equal to $x$. For instance, $f(5.4) = 0.4$ and $f(-5.4) = 0.6$.
Let $g : \mathbb{R} \to \mathbb{R}$ be defined by $g(x) = f(1 - 2022x)$. Find 2023 distinct rational numbers $x$ satisfying $g(x) = x$. Each such solution $x$ should be explicitly written in the form $m/n$ for some integers $m, n$.
