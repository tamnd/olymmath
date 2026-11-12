# Match rate of the derived datasets

This report is made by `om matchrate -derived` (spec 05.4 and 06.5). It reads every seed row of the datasets that the source register marks `derived: true`: rows copied from other sources, sometimes changed or written by a model (spec 05.1). A seed row is matched by key (K) when its competition, year and position give an appearance that has a record. Else it is compared with the 35195 problem records with a statement by E, the cosine of the TF-IDF weights of their words and TeX, and a row whose nearest record has E of at least 0.7 is matched, unless the row and the record both have an answer and the answers differ after a light normalization (signal A). Such a row is a variant: it can be another problem, or the same answer in another form, so a person must look at it. A row with E from 0.5 to 0.7 is near, and a person must look at it too. The other rows are new. New rows of one dataset that have E of at least 0.7 with each other are one new problem, so a problem that the dataset has in several rows counts once.

The exit of milestone 6 asks for less than 1% new problems for each 10,000 rows, that is less than 100 new problems for each 10,000 rows of a dataset.

| Dataset | Rows | Matched | By key | Variants | Near | New rows | New rate | New problems | New per 10,000 rows | New with a competition |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| hf-numinamath-1-5 | 315736 | 36912 | 0 | 2212 | 44405 | 232207 | 73.54% | 184377 | 5840 | 0 |
| hf-omni-math | 4428 | 2591 | 0 | 226 | 399 | 1212 | 27.37% | 1150 | 2597 | 599 |
| hf-olympiadbench | 2133 | 533 | 0 | 24 | 275 | 1301 | 60.99% | 1010 | 4735 | 0 |
| hf-liveaopsbench | 5328 | 179 | 0 | 57 | 807 | 4285 | 80.42% | 4208 | 7898 | 0 |
| hf-polymath | 9000 | 1480 | 0 | 92 | 1261 | 6167 | 68.52% | 4227 | 4697 | 0 |
| All | 336625 | 41695 | 0 | 2611 | 47147 | 245172 | 72.83% | 194972 | 5792 | 599 |

5 of 5 datasets give 100 or more new problems for each 10,000 rows: hf-numinamath-1-5, hf-omni-math, hf-olympiadbench, hf-liveaopsbench, hf-polymath. The exit does not hold yet.

These derived datasets have no seed rows yet, so they are not in the table: hf-openmathreasoning, hf-nemotron-math-proofs, hf-nemotron-math-v2, hf-aops-instruct.
