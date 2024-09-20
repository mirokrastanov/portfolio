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

const Technologies = () => {
    return (
        <div className='border-b border-neutral-800 pb-24'>
            <h2 className='my-20 text-center text-4xl'>Technologies</h2>
            <div className='flex flex-wrap items-center justify-center gap-4'>
                <TechIcon Icon={RiReactjsLine} color={'text-cyan-500'} title={'React.js'} />
                <TechIcon Icon={FaAngular} color={'text-red-600'} title={'Angular'} />

                <TechIcon Icon={SiTypescript} color={'text-blue-600'} title={'TypeScript'} />
                <TechIcon Icon={SiJavascript} color={'text-yellow-400'} title={'JavaScript'} />
                <TechIcon Icon={SiHtml5} color={'text-orange-600'} title={'HTML5'} />
                <TechIcon Icon={SiCss3} color={'text-blue-500'} title={'CSS3'} />

                <TechIcon Icon={FaNodeJs} color={'text-green-500'} title={'Node.js'} />
                <TechIcon Icon={SiExpress} color={'text-gray-500'} title={'Express.js'} />
                <TechIcon Icon={SiMongodb} color={'text-green-600'} title={'MongoDB'} />
                <TechIcon Icon={DiMsqlServer} color={'text-red-600'} title={'SQL Server'} />
                <TechIcon Icon={TbSql} color={'text-blue-700'} title={'SQL'} />

                <TechIcon Icon={SiPlaywright} color={'text-green-500'} title={'Playwright'} />
                <TechIcon Icon={SiJest} color={'text-red-500'} title={'Jest'} />

                <TechIcon Icon={SiPuppeteer} color={'text-green-400'} title={'Puppeteer.js'} />
            </div>
        </div>
    )
}

export default Technologies;