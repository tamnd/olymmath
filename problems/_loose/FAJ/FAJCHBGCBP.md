---
tag: FAJCHBGCBP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=242919
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A grandpa has a finite number of boxes in his attic. Each box is a straight rectangular prism with integer edge lengths. For every box its width is greater or equal to its height and its length is greater or equal to its width. A box can be put inside another box if and only if all of its dimensions are respectively smaller than the other one's. You can put two or more boxes in a bigger box only if the smaller boxes are all already inside one of the boxes.
The grandpa decided to put the boxes in each other so that there would be a minimal number of visible boxes in the attic (boxes that have not been put inside another). He decided to use the following algorithm: at each step he finds the longest sequence of boxes so that the first can be put in the second, the second can be put in the third, etc., and then he puts them inside each other in the aforementioned order. The grandpa used the algorithm until no box could be put inside another. It is known that at each step the longest sequence of boxes was unique, e.g., at no moment were there two different sequences with the same length.
The grandpa now claims that he has the minimal possible number of visible boxes in his attic. Is the claim necessarily true?
