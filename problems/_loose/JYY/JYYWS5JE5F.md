---
tag: JYYWS5JE5F
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=57424
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are several cities, some of which are connected by bus routes (without stops along the way). From each city, you can travel to any other city (possibly with transfers). Ivanov bought one ticket for each route (meaning he can travel on it once in either direction). Petrov bought $n$ tickets for each route. Ivanov and Petrov set out from city A. Ivanov used all his tickets, did not buy any new ones, and ended up in another city B. Petrov traveled for some time using his tickets, ended up in city $X$, and cannot leave it without buying a new ticket. Prove that $X$ is either $A$ or $B$.
