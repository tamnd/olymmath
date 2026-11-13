---
tag: WAKCCY9ECW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220375
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $p=47$ be a prime. Call a function $f$ defined on the integers *lit* if $f(x)$ is an integer from 1 to $p$ inclusive and $f(x+p)=f(x)$ for all integers $x$. How many *lit* functions $g$ are there such that for all integers $x$, $p$ divides $g(x^2)-g(x)-x^8+x$?

*Proposed by Monkey_king1*
