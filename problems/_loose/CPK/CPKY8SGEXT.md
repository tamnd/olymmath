---
tag: CPKY8SGEXT
kind: problem
type: answer
answer: f(x) = c|x| \text{ for } c \in [0,2]
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=226492
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all functions $f:\mathbb{R} \rightarrow \mathbb{R}$ such that:
$\bullet$ $f(x)<2$ for all $x\in (0,1)$;
$\bullet$ for all real numbers $x,y$ we have:
$$max\{f(x+y),f(x-y)\}=f(x)+f(y)$$

Proposed by Navid Safaei
