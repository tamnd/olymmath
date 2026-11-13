---
tag: 28FKWNYRTB
kind: problem
type: answer
answer: "503"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=145828
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given $A \subseteq\{1,2, \cdots, 2014\}$, let real numbers $\lambda_{1} 、 \lambda_{2} 、 \lambda_{3} 、 x_{1} 、 x_{2} 、 x_{3}$ satisfy
(i) $\lambda_{1} 、 \lambda_{2} 、 \lambda_{3} \in\{-1,0,1\}$ and not all are 0;
(ii) $x_{1} 、 x_{2} 、 x_{3} \in A$;
(iii) If $x_{i}=x_{j}$, then $\lambda_{i} \lambda_{j} \neq-1(1 \leqslant i 、 j \leqslant 3)$.
If all numbers of the form $x_{1} x_{2} x_{3}$ and $\lambda_{1} x_{1}+\lambda_{2} x_{2}+\lambda_{3} x_{3}$ are not multiples of 2014, then the set $A$ is called a "good set". Find the maximum number of elements in a good set $A$.
