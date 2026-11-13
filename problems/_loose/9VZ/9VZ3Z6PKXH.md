---
tag: 9VZ3Z6PKXH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2018 Taiwan TST Round  3
    url: https://artofproblemsolving.com/community/c6h2048282
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=61192
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=253188
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tw-tst/2018
    source: hf-ai-mo-aops
    label: 2018 Taiwan TST Round  3
---
A *calendar* is a (finite) rectangular grid. A calendar is *valid* if it satisfies the following conditions:

(i) Each square of the calendar is colored white or red, and there are exactly 10 red squares.

(ii) Suppose that there are $N$ columns of squares in the calendar. Then if we fill in the numbers $1,2,\ldots$ from the top row to the bottom row, and within each row from left to right, there do not exist $N$ consecutive numbers such that the squares they are in are all white.

(iii) Suppose that there are $M$ rows of squares in the calendar. Then if we fill in the numbers $1,2,\ldots$ from the left-most column to the right-most column, and within each column from bottom to top, there do not exist $M$ consecutive numbers such that the squares they are in are all white. In other words, if we rotate the calendar clockwise by $90^{\circ}$ , the resulting calendar still satisfies (ii).

How many different kinds of valid calendars are there?

(Remark: During the actual exam, the contestants were confused about what counts as different calendars. So although this was not in the actual exam, I would like to specify that two calendars are considered different if they have different side lengths or if the $10$ red squares are at different locations.)
