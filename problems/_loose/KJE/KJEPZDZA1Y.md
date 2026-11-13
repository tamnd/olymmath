---
tag: KJEPZDZA1Y
kind: problem
type: answer
answer: a = 16, b = 6
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0003.parquet#row=418
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-nmo
    source: hf-mathnet
    label: Romania 75th Romanian Mathematical Olympiad
---
Find the positive integers $a$ and $b$ fulfilling
$$
\frac{a}{(a,b)} = b + \frac{48 \cdot (a,b)}{[a,b]} \text{and} \frac{b}{(a,b)} = a - \frac{312 \cdot (a,b)}{[a,b]}
$$
where $(a, b) = \gcd(a, b)$ and $[a, b] = \text{lcm}(a, b)$.
