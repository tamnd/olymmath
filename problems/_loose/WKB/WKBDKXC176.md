---
tag: WKBDKXC176
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=230565
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The following operations are performed to the natural numbers $x$: $x\to x+2$ or $x\to x+n$, $x\to x\cdot 2$ or $x\to x\cdot n$. Additions and multiplications are performes alternatively (adding $2$ or $n$ and multiplying by $2$ or by $n$ one can choose as he wishes for each step). The number $m$ is called *attainable* if it can be obtained from $1$ by a sequence of such operations, otherwise $m$ is called *unattainable*.
Prove that if $n=5$ or $n=7$, then there are infinitely many unattainable numbers.
