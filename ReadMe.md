-- Table: public.permits

-- DROP TABLE public.permits;

CREATE TABLE IF NOT EXISTS public.permits
(
    permit_id integer NOT NULL,
    citizen_id integer NOT NULL,
    start_date date NOT NULL,
    end_date date NOT NULL,
    club text COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT permits_pkey PRIMARY KEY (permit_id)
)

TABLESPACE pg_default;

ALTER TABLE public.permits
    OWNER to postgres;

-------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------

-- Table: public.passages

-- DROP TABLE public.passages;

CREATE TABLE IF NOT EXISTS public.passages
(
    passage_id integer NOT NULL,
    citizen_id integer NOT NULL,
    pass_date date NOT NULL,
    club text COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT passages_pkey PRIMARY KEY (passage_id)
)

TABLESPACE pg_default;

ALTER TABLE public.passages
    OWNER to postgres;


