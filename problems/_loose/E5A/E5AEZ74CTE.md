---
tag: E5AEZ74CTE
kind: problem
type: answer
answer: (1,1,2,3),(3,2,1,1),(4,1,3,1),(1,3,4,1)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=4715
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let's square both equations and add them. We get a consequence of the system: $\left(x^{2}+t^{2}\right)\left(z^{2}+y^{2}\right)=50$. Since $x, y, z, t$ are natural numbers, this equality is possible only in the following cases: $\left\{\begin{array}{c}x^{2}+t^{2}=5 \\ z^{2}+y^{2}=10 ;\end{array}\left\{\begin{array}{l}x^{2}+t^{2}=10 \\ z^{2}+y^{2}=5 ;\end{array}\left\{\begin{array}{l}x^{2}+t^{2}=25 \\ z^{2}+y^{2}=2 ;\end{array}\left\{\begin{array}{c}x^{2}+t^{2}=2 \\ z^{2}+y^{2}=25 .\end{array}\right.\right.\right.\right.$

From the first system, we find that either $x=2, t=1$ or $x=1, t=2 ; z=3$, $y=1$, or $z=1, y=3$. Then we get four solutions:

$(2,1,1,3),(1,1,2,3),(1,3,2,1),(2,3,1,1)$. And only one ( $1,1,2,3$ ) satisfies the original system.

From the second system, we find that $x=3, t=1 ; x=1, t=3 ; z=2, y=1 ; y=2, z=1$. Then the original system in this case will be satisfied by the solution ( $3,2,1,1$ ).

Similarly, we find two more solutions: $(4,1,3,1),(1,3,4,1)$.
