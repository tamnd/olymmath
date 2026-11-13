---
tag: XVA435SP7G
kind: problem
type: answer
answer: (a_i)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204902
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let us call an integer sequence $\{ a_1,a_2, \dots \}$ nice if there exist a function $f: \mathbb{Z^+} \to \mathbb{Z^+} $ such that
$$a_i \equiv a_j \pmod{n} \iff i\equiv j \pmod{f(n)}$$
for all $i,j,n \in \mathbb{Z^+}$. Find all nice sequences.
