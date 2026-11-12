---
tag: KN2V4K84JH
kind: problem
type: answer
answer: 16\sqrt{3}-12
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=10028
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Triangles $A D L$ and $B C L$ are similar, $\frac{A D}{B C}=\frac{A L}{B L}=\frac{L D}{L C}, \frac{A D}{B C}=\frac{A L}{B L}=\frac{L D}{L C}$. Let $u=B L, v=A L$. Consider triangle $A B D$. In the first case: $A B=6 \sqrt{13}, A D=6, B D=$ $\sqrt{36 \cdot 13-36}=12 \sqrt{3}$. Then $\frac{6}{12}=\frac{v}{u}=\frac{12 \sqrt{3}-u}{18-v}, u=2 v, 18-v=24 \sqrt{3}-4 v, v=8 \sqrt{3}-6$, $B L=16 \sqrt{3}-12$.

In the second case: $A B=30, A D=6, B D=\sqrt{900-36}=12 \sqrt{6}$. Then $\frac{6}{24}=\frac{v}{u}=\frac{12 \sqrt{6}-u}{18-v}$, $u=4 v, 18-v=48 \sqrt{6}-16 v, 15 v=48 \sqrt{6}-18, B L=\frac{16 \sqrt{6}-6}{5}$.
