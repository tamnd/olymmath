---
tag: MEMYHWB8G4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=91943
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Suppose the ages of the residents in a city are represented not by integers but by real numbers, and any two residents $x$ and $x^{\prime}$ either know each other or do not know each other. Moreover, when two residents do not know each other, there exists a chain of residents $x=x_{0}, x_{1}, \cdots, x_{n}=x^{\prime}(n \geqslant 2)$, such that $x_{i-1}$ and $x_{i}$ all know each other. In a survey, all male residents reported their ages, and there is at least one male resident, but each female resident only provided the following information: each of their ages is equal to the average age of all the people they know. Prove that the above conditions are sufficient to uniquely determine the ages of all female residents.
