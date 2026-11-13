---
tag: TQKHMSZ6FQ
kind: problem
type: answer
answer: \alpha=-1,\operatorname{det}B=1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=178337
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let matrices $A, B \in M_{2}(\mathbb{R})$ such that $\operatorname{det} A=\operatorname{det}(A+B)=1$ and $\operatorname{det}(A-B)=3$, and the function $f: \mathbb{R} \rightarrow \mathbb{R}, f(x)=\operatorname{det}(A+x B)$

a) Show that the function $f: \mathbb{R} \rightarrow \mathbb{R}, f(x)=\operatorname{det} A+\alpha \cdot x+\operatorname{det} B \cdot x^{2}, \alpha \in \mathbb{R}$.

b) Find $\alpha$ and det $B$.
