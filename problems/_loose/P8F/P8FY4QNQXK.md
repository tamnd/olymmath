---
tag: P8FY4QNQXK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2012 Canadian Mathematical Olympiad Qualification Repechage
    url: https://artofproblemsolving.com/community/c6h590326
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=7725
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=209816
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ca-cmoqr/2012
    source: hf-ai-mo-aops
    label: 2012 Canadian Mathematical Olympiad Qualification Repechage
---
Let $ABC$ be a triangle such that $\angle BAC = 90^\circ$ and $AB < AC$ . We divide the interior of the triangle into the following six regions: \begin{align*}
S_1=\text{set of all points }\mathit{P}\text{ inside }\triangle ABC\text{ such that }PA<PB<PC
S_2=\text{set of all points }\mathit{P}\text{ inside }\triangle ABC\text{ such that }PA<PC<PB
S_3=\text{set of all points }\mathit{P}\text{ inside }\triangle ABC\text{ such that }PB<PA<PC
S_4=\text{set of all points }\mathit{P}\text{ inside }\triangle ABC\text{ such that }PB<PC<PA
S_5=\text{set of all points }\mathit{P}\text{ inside }\triangle ABC\text{ such that }PC<PA<PB
S_6=\text{set of all points }\mathit{P}\text{ inside }\triangle ABC\text{ such that }PC<PB<PA\end{align*} Suppose that the ratio of the area of the largest region to the area of the smallest non-empty region is $49 : 1$ . Determine the ratio $AC : AB$ .
