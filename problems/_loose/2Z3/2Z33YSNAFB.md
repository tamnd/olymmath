---
tag: 2Z33YSNAFB
kind: problem
type: answer
answer: "1:1"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=5674
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $S A B C D$ be the given pyramid, $A B=a-$ side of the square, $S A=h-$ height of the pyramid. Draw perpendiculars $B M$ and $D M$ to the edge $S C$. From the theorem of three perpendiculars, it follows that triangles $S B C$ and $S D C$ are right triangles. Then $M B=\frac{B C \cdot S B}{S C}=$ $\frac{a \cdot \sqrt{a^{2}+h^{2}}}{\sqrt{2 a^{2}+h^{2}}}$. By the cosine theorem for the isosceles triangle $D M B$, we get $D B^{2}=M B^{2}+M D^{2}-2 M B \cdot M D \cos \angle D M B \Leftrightarrow 2 a^{2}=$ $2 \frac{a^{2}\left(a^{2}+h^{2}\right)}{2 a^{2}+h^{2}}-2 \frac{a^{2}\left(a^{2}+h^{2}\right)}{2 a^{2}+h^{2}} \cdot\left(-\frac{1}{2}\right) \Leftrightarrow a^{2}=h^{2} \Rightarrow h: a=1: 1$.
