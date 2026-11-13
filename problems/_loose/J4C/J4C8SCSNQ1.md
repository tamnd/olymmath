---
tag: J4C8SCSNQ1
kind: problem
type: answer
answer: "1154"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=267347
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We say that an integer $a$ is a quadratic, cubic, or quintic residue modulo $n$ if there exists an integer $x$ such that $x^2\equiv a \pmod n$, $x^3 \equiv a \pmod n$, or $x^5 \equiv a \pmod n$, respectively. Further, an integer $a$ is a primitive residue modulo $n$ if it is exactly one of these three types of residues modulo $n$.

How many integers $1 \le a \le 2015$ are primitive residues modulo $2015$?

* Proposed by Michael Ren *
