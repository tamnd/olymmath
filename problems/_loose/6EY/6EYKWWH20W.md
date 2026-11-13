---
tag: 6EYKWWH20W
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2009 Iran MO (2nd Round)
    url: https://artofproblemsolving.com/community/c6h367774
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=3683
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=205866
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo-r2/2009
    source: hf-ai-mo-aops
    label: 2009 Iran MO (2nd Round)
---
$11$ people are sitting around a circle table, orderly (means that the distance between two adjacent persons is equal to others) and $11$ cards with numbers $1$ to $11$ are given to them. Some may have no card and some may have more than $1$ card. In each round, one [and only one] can give one of his cards with number $ i $ to his adjacent person if after and before the round, the locations of the cards with numbers $ i-1,i,i+1 $ don't make an acute-angled triangle.
(Card with number $0$ means the card with number $11$ and card with number $12$ means the card with number $1$ !)
Suppose that the cards are given to the persons regularly clockwise. (Mean that the number of the cards in the clockwise direction is increasing.)
Prove that the cards can't be gathered at one person.
