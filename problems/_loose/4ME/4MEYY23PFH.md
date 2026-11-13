---
tag: 4MEYY23PFH
kind: problem
type: answer
answer: Britta:album,Petra:ball,Anja:doll
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=183365
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The girls Britta, Petra, and Anja wish for a ball, a doll, and a stamp album.

Each of the girls wishes for exactly one of the mentioned items, and each girl wishes for a different item. Marie is supposed to find out which of the girls wishes for which item. In response to her question, she receives the following answers:

(1) Britta wishes for the ball.

(2) Petra does not wish for the ball.

(3) Anja does not wish for the album.

Of these three answers, exactly one is true, and the other two are false.

If one knows this, one can determine for each of the three girls which item she wishes for.

Explain how these determinations can be made and state the determinations!
