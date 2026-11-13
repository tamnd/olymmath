---
tag: 8HWWXXA33N
kind: problem
type: answer
answer: "172"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=186260
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In a beauty contest for poodles, Asta, Benno, Cäsar, and Dolly face a jury of four members. Each jury member votes for one of the dogs by raising a card with the initial letter of the dog's name. As a rule for evaluating this voting result, it was stipulated: If two dogs clearly receive more votes than the other two dogs, they are considered qualified. However, if the voting result does not clearly show two dogs with more votes than the other two, a supplementary regulation will be made (e.g., a new vote will be scheduled).

Determine the number of all those different voting results that lead to this latter case! Voting results are considered the same only if they not only match in the number of votes for the dogs but also in which jury members voted for the respective dogs. For example, the voting results $A A B C$ and $C A B A$ are considered different.
