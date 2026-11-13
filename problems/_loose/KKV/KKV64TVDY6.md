---
tag: KKV64TVDY6
kind: problem
type: answer
answer: '{1}\cup[-\sqrt{2},-\frac{\sqrt{2}}{2}]'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=102051
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\mathrm{a}$ be a real number, and the function $\mathrm{f}(\mathrm{x})=\mathrm{a} \sqrt{1-\mathrm{x}^{2}}+\sqrt{1-\mathrm{x}}+\sqrt{1+\mathrm{x}}$ has a maximum value of $\mathrm{g}(\mathrm{a})$.
(1) Let $t=\sqrt{1-x}+\sqrt{1+x}$, find the range of $t$, and express $f(x)$ as a function $m(t)$ of $t$;
(2) Find $g(a)$;
(3) Find all real numbers $a$ that satisfy $g(a)=g\left(\frac{1}{a}\right)$.
