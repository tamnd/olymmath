---
tag: VXHBNPH0W1
kind: problem
type: answer
answer: "123"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=74518
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: pt
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Brazil/train/0002.parquet#row=17
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: br-obm
    source: hf-mathnet
    label: Brazil Brazilian Mathematical Olympiad
---
(a) Show that the identity below is always true:

$$
a^{n+1}+b^{n+1}=(a+b)\left(a^{n}+b^{n}\right)-a b\left(a^{n-1}+b^{n-1}\right)
$$

(b) Let a and b be real numbers such that $\mathrm{a}+\mathrm{b}=1$ and $\mathrm{ab}=-1$. Show that the number $a^{10}+b^{10}$ is an integer, calculating its value.
