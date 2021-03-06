package com.bitcamp.mapper;

import java.util.HashMap;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.bitcamp.dto.HostDTO;
import com.bitcamp.dto.TourApplyDTO;
import com.bitcamp.dto.TourDTO;
import com.bitcamp.dto.TourMarkerDTO;

@Mapper
public interface TourMapper {
	
	//tour 입력, 마커입력
	public int insertTour(TourDTO dto);
	public int insertMarker(TourMarkerDTO dto);
	
	
	//tour 리스트 불러오기
	public int getTotalRow();
	
	
	//tour 상세 불러오기
	public TourDTO tourDetail(int tourno);
	public List<TourDTO> tourList(int startRow);
	public List<TourMarkerDTO> markerList(int tourno);
	public HostDTO hostDetail(int hostno);
	public TourApplyDTO tourApplySelect(HashMap<String, Object> map);
	public int insertApplyTour(HashMap<String, Object> map);
	public int increApplyCount(int tourno);
	public int updateTour(TourDTO dto);
	public int deleteMarker(int tourno);
	public int deleteTour(int tourno);
	
	
	
}
