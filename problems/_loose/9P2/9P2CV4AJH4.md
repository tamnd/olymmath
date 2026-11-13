---
tag: 9P2CV4AJH4
kind: problem
type: answer
answer: 2^{\frac{n(n+1)}{2}}2^{n+1}-2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=178904
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let the function $f:(-1,1) \rightarrow R, f(t)=\frac{2 t}{1-t^{2}}$. Calculate:
a) $L_{1}=\lim _{x \rightarrow 0} \frac{1}{x^{n}} \prod_{k=1}^{n}(\underbrace{f \circ f \circ \ldots \circ f}_{\text {k times }})(\operatorname{tg} x)$;
b) $L_{2}=\lim _{x \rightarrow 0} \frac{1}{x} \sum_{k=1}^{n} \ln (1+(\underbrace{f \circ f \circ \ldots \circ f}_{\text {k times }})(\operatorname{tg} x))$, where $x \in\left(-\frac{\pi}{2^{n+1}}, \frac{\pi}{2^{n+1}}\right), n \in N^{*}$ fixed.

Prof. Ilie Diaconu, "Avram Iancu" Theoretical High School, Cluj-Napoca
