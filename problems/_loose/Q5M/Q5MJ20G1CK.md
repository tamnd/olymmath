---
tag: Q5MJ20G1CK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=268986
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $p > 3$ be a prime number. A sequence of $p-1$ integers $a_1,a_2, \dots, a_{p-1}$ is called *wonky* if they are distinct modulo $p$ and $a_ia_{i+2} \not\equiv a_{i+1}^2 \pmod p$ for all $i \in \{1, 2, \dots, p-1\}$, where $a_p = a_1$ and $a_{p+1} = a_2$. Does there always exist a wonky sequence such that $$a_1a_2, a_1a_2+a_2a_3, \dots, a_1a_2+\cdots +a_{p-1}a_1,$$ are all distinct modulo $p$?

*Proposed by Harun Khan*
