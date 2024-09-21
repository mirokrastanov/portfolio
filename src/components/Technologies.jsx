import React from 'react';
import TechIcon from './shared/TechIcon';
import {
    SiCss3, SiExpress, SiHtml5, SiJavascript,
    SiJest, SiMongodb, SiPlaywright, SiPuppeteer,
    SiTypescript
} from 'react-icons/si';
import { FaAngular, FaNodeJs } from 'react-icons/fa';
import { RiReactjsLine } from 'react-icons/ri';
import { DiMsqlServer } from 'react-icons/di';
import { TbSql } from 'react-icons/tb';
import { motion } from "framer-motion";


const Technologies = () => {
    return (<>
        <div className='pb-24'>
            <motion.h2
                className='my-20 text-center text-4xl'
                whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}>
                Technologies
            </motion.h2>
            <motion.div
                className='flex flex-wrap items-center justify-center gap-4'
                whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}>
                <TechIcon Icon={RiReactjsLine} color={'text-cyan-500'} title={'React.js'} duration={2.5} />
                <TechIcon Icon={FaAngular} color={'text-red-600'} title={'Angular'} duration={3} />
                <TechIcon Icon={SiTypescript} color={'text-blue-700'} title={'TypeScript'} duration={4} />
                <TechIcon Icon={SiJavascript} color={'text-yellow-400'} title={'JavaScript'} duration={2} />
                <TechIcon Icon={SiHtml5} color={'text-orange-600'} title={'HTML5'} duration={6} />
                <TechIcon Icon={SiCss3} color={'text-blue-500'} title={'CSS3'} duration={3.5} />
                <TechIcon Icon={SiPuppeteer} color={'text-white'} title={'Puppeteer.js'} duration={2.5} />
            </motion.div>
        </div>
        <div className='border-b border-neutral-800 pb-24'>
            <motion.div
                className='flex flex-wrap items-center justify-center gap-4'
                whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1.5 }}>
                <TechIcon Icon={FaNodeJs} color={'text-green-500'} title={'Node.js'} duration={2} />
                <TechIcon Icon={SiExpress} color={'text-gray-500'} title={'Express.js'} duration={4} />
                <TechIcon Icon={SiMongodb} color={'text-green-700'} title={'MongoDB'} duration={2.5} />
                <TechIcon Icon={DiMsqlServer} color={'text-red-500'} title={'MSSQL(T-SQL)'} duration={3.5} />
                <TechIcon Icon={TbSql} color={'text-sky-600'} title={'SQL'} duration={2.5} />
                <TechIcon Icon={SiPlaywright} color={'text-green-500'} title={'Playwright'} duration={4} />
                <TechIcon Icon={SiJest} color={'text-red-500'} title={'Jest'} duration={3} />
            </motion.div>
        </div>
    </>)
}

export default Technologies;