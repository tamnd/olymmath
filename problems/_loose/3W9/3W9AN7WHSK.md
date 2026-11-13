---
tag: 3W9AN7WHSK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=144297
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
At a certain Mathematical Conference, exactly $n (n \geq 8)$ couples are attending. The conference arranges all the men to sit around a round table with $n$ seats, and all the women to sit around another round table with $n$ seats. The conference organizers discover a contagious virus spreading among the attendees, with the following transmission route: Let $P$ be a healthy attendee, and $P$ will only be infected if at least two out of the three people, including the two neighbors on either side and their spouse, are infected; otherwise, $P$ will remain healthy. Suppose that at the beginning of the conference, $s$ out of the $2n$ people are already infected, and the virus continues to spread among the attendees, eventually leading to all originally healthy attendees being infected. Find the minimum value of $s$.
