---
tag: H981NJHB1P
kind: problem
type: answer
answer: NP = PQ = QG
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=254348
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $ABCD$ be a convex quadrilateral such that $$\begin{array}{rl} E,F \in [AB],& AE = EF = FB \\ G,H \in [BC],& BG = GH = HC \\ K,L \in [CD],& CK = KL = LD \\ M,N \in [DA],& DM = MN = NA \end{array}$$ Let $$[NG] \cap [LE] = \{P\}, [NG]\cap [KF] = \{Q\},$$ $${[}MH] \cap [KF] = \{R\}, [MH]\cap [LE]=\{S\}$$
Prove that

- $Area(ABCD) = 9 \cdot Area(PQRS)$
- $NP=PQ=QG$
