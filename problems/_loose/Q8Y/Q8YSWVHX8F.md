---
tag: Q8YSWVHX8F
kind: problem
type: answer
answer: a. Yes. b. No.
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Estonia/train/0001.parquet#row=254
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ee-mo
    source: hf-mathnet
    label: Estonia Estonian Mathematical Olympiad
---
The website of a company has multiple pages, which may point to each other. A list containing each of these pages exactly once is called *natural*, if whenever one page points to another, it is written before the other page.
The webmaster of the company has a natural list of pages. Then she reorders the pages, writing down first all pages which are not pointed to by any other page, then all pages which the first page of the original list points to, then all pages which the second page of the original list points to and which are not listed yet etc.

a. It is known that each page is pointed to by at most one other page. Can we be certain that the new list is natural?

b. It is not known whether each page is pointed to by at most one other page. Can we be certain that at least one possible new list is natural?
